# Generated by Django 2.2.2 on 2019-06-05 10:34

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Email',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.EmailField(max_length=254, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=50)),
                ('second_name', models.CharField(max_length=70)),
            ],
        ),
        migrations.CreateModel(
            name='Phone',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number', models.PositiveIntegerField(unique=True, validators=[django.core.validators.MinValueValidator(1111111), django.core.validators.MaxValueValidator(9999999999999999)])),
                ('person', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='contacts.Person')),
            ],
        ),
        migrations.AddConstraint(
            model_name='person',
            constraint=models.UniqueConstraint(fields=('first_name', 'second_name'), name='unique user'),
        ),
        migrations.AddField(
            model_name='email',
            name='person',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='contacts.Person'),
        ),
    ]