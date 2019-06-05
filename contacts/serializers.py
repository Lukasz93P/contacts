from rest_framework import serializers
from rest_framework.validators import UniqueTogetherValidator

from .models import *

person_validators = [
    UniqueTogetherValidator(
        queryset=Person.objects.all(),
        fields=('first_name', 'second_name')
    )
]

email_base_fields = ['id', 'address']
phone_base_fields = ['id', 'number']
person_base_fields = ['id', 'first_name', 'second_name']


class EmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Email
        fields = email_base_fields


class EmailWithPersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Email
        fields = [*email_base_fields, 'person']


class PhoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Phone
        fields = phone_base_fields


class PhoneWithPersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Phone
        fields = [*phone_base_fields, 'person']


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = person_base_fields
        validators = person_validators


class PersonWithContactsSerializer(serializers.ModelSerializer):
    emails = EmailSerializer(source='email_set', many=True)
    phones = PhoneSerializer(source='phone_set', many=True)

    class Meta:
        model = Person
        fields = [*person_base_fields, 'emails', 'phones']
        validators = person_validators
