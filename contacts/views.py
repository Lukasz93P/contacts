from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from rest_framework.pagination import PageNumberPagination

from .models import *
from .serializers import *
from .helpers import *
from .person_service import *
from .exceptions import InvalidOperationException
from .pagination import QueryStringPageNumberPagination


class PersonViewSet(viewsets.ModelViewSet):
    pagination_class = QueryStringPageNumberPagination

    def get_queryset(self):
        query_params = self.request.query_params
        return Person.objects.filter(
            **get_filtered_query_search_params(query_params, [*person_base_fields, 'address', 'number'],
                                               {'address': 'email', 'number': 'phone'}))

    def get_serializer_class(self):
        if self.action in ['list', 'retrieve']:
            return PersonWithContactsSerializer
        return PersonSerializer

    def destroy(self, request, *args, **kwargs):
        try:
            delete_person(self.get_object())
        except InvalidOperationException:
            return Response(status=status.HTTP_409_CONFLICT)
        return Response()


class EmailViewSet(viewsets.ModelViewSet):
    queryset = Email.objects.all()
    pagination_class = PageNumberPagination

    def get_serializer_class(self):
        if self.action in ['create', 'update']:
            return EmailWithPersonSerializer
        return EmailSerializer


class PhoneViewSet(viewsets.ModelViewSet):
    queryset = Phone.objects.all()
    pagination_class = PageNumberPagination

    def get_serializer_class(self):
        if self.action in ['create', 'update']:
            return PhoneWithPersonSerializer
        return PhoneSerializer
