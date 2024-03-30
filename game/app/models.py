from django.db import models


class Project(models.Model):
    name = models.CharField("Названия", max_length=100)
    description = models.TextField("Описание")
    team_quantity = models.IntegerField("Количество участников")

    def __str__(self):
        return self.name
