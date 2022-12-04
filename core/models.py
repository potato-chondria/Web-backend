# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Drain(models.Model):
    drain_id = models.BigIntegerField(db_column='DRAIN_ID', primary_key=True)  # Field name made lowercase.
    drain_adr = models.TextField(db_column='DRAIN_ADR', blank=True, null=True)  # Field name made lowercase.
    ctgry = models.CharField(db_column='CTGRY', max_length=5)  # Field name made lowercase.
    drain_lati = models.FloatField(db_column='DRAIN_LATI')  # Field name made lowercase.
    drain_longti = models.FloatField(db_column='DRAIN_LONGTI')  # Field name made lowercase.
    pollution = models.IntegerField(db_column='POLLUTION')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'DRAIN'
