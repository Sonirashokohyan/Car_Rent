from django.contrib import admin
from .models import YourModel

# Register your models here.

class appAdmin(admin.ModelAdmin):
  list_display = ("name", "description",)
admin.site.register(YourModel, appAdmin,)

