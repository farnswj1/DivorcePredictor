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
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q02 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q03 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q04 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q05 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q06 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q07 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q08 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q09 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q10 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q11 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q12 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q13 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q14 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q15 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q16 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q17 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q18 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q19 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q20 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q21 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q22 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q23 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q24 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q25 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q26 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q27 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q28 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q29 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q30 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q31 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q32 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q33 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q34 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q35 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q36 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q37 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q38 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q39 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q40 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q41 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q42 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q43 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q44 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q45 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q46 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q47 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q48 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q49 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q50 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q51 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q52 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q53 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    q54 = models.IntegerField(
        choices=Scale.choices,
        validators=[MinValueValidator(0), MaxValueValidator(4)]
    )
    is_divorced = models.BooleanField()

    class Meta:
        ordering = ("id",)
