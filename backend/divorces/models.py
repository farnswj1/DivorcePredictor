from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.
class DivorceCase(models.Model):
    class Scale(models.IntegerChoices):
        NEVER = 1
        SELDOM = 2
        AVERAGELY = 3
        FREQUENTLY = 4 
        ALWAYS = 5

    q01 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q02 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q03 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q04 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q05 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q06 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q07 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q08 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q09 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q10 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q11 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q12 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q13 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q14 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q15 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q16 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q17 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q18 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q19 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q20 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q21 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q22 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q23 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q24 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q25 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q26 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q27 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q28 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q29 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q30 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q31 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q32 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q33 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q34 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q35 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q36 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q37 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q38 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q39 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q40 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q41 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q42 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q43 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q44 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q45 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q46 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q47 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q48 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q49 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q50 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q51 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q52 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q53 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    q54 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    is_divorced = models.BooleanField()

    class Meta:
        ordering = ('id',)
