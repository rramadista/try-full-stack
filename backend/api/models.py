from django.db import models

class Office(models.Model):
    BranchID = models.IntegerField()
    OfficeName = models.CharField(max_length=100)
    StartDate = models.DateField()
    