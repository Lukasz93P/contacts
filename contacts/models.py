from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


class Person(models.Model):
    class Meta:
        constraints = [models.UniqueConstraint(fields=['first_name', 'second_name'], name='unique user')]

    first_name = models.CharField(max_length=50, null=False, blank=False)
    second_name = models.CharField(max_length=70, null=False, blank=False)

    def __str__(self):
        return f'{self.first_name} {self.second_name}'


class Email(models.Model):
    address = models.EmailField(null=False, blank=False, unique=True)
    person = models.ForeignKey(Person, null=False, on_delete=models.CASCADE)

    def __str__(self):
        return self.address


class Phone(models.Model):
    number = models.PositiveIntegerField(null=False, blank=False, unique=True,
                                         validators=[MinValueValidator(int('1' * 7)), MaxValueValidator(int('9' * 16))])
    person = models.ForeignKey(Person, null=False, on_delete=models.CASCADE)

    def __str__(self):
        return self.number
