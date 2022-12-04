# Generated by Django 3.1.14 on 2022-12-04 07:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Drain',
            fields=[
                ('drain_id', models.BigIntegerField(db_column='DRAIN_ID', primary_key=True, serialize=False)),
                ('drain_adr', models.TextField(blank=True, db_column='DRAIN_ADR', null=True)),
                ('ctgry', models.CharField(db_column='CTGRY', max_length=5)),
                ('drain_lati', models.FloatField(db_column='DRAIN_LATI')),
                ('drain_longti', models.FloatField(db_column='DRAIN_LONGTI')),
                ('pollution', models.IntegerField(db_column='POLLUTION')),
            ],
            options={
                'db_table': 'DRAIN',
                'managed': False,
            },
        ),
        migrations.RemoveField(
            model_name='likedplace',
            name='uid',
        ),
        migrations.RemoveField(
            model_name='likedtheme',
            name='uid',
        ),
        migrations.DeleteModel(
            name='Place',
        ),
        migrations.DeleteModel(
            name='Theme',
        ),
        migrations.DeleteModel(
            name='LikedPlace',
        ),
        migrations.DeleteModel(
            name='LikedTheme',
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]
