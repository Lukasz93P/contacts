from .exceptions import *


def delete_person(person):
    if person.email_set.exists() or person.phone_set.exists():
        raise InvalidOperationException('Person with assigned emails or phone numbers cannot be deleted')
    person.delete()
