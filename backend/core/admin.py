from django.contrib.admin import ModelAdmin, register
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext_lazy as _
from core.models import User, IPAddress


# Register your models here.
@register(User)
class UserAdmin(BaseUserAdmin):
    readonly_fields = ('id',)

    fieldsets = (
        (
            None,
            {
                'fields': (
                    'id',
                    'username',
                    'password'
                )
            }
        ),
        (
            _('Personal info'),
            {
                'fields': (
                    'first_name',
                    'last_name',
                    'email',
                    'customer'
                )
            }
        ),
        (
            _('Permissions'),
            {
                'fields': (
                    'is_active',
                    'is_staff',
                    'is_superuser',
                    'groups',
                    'user_permissions'
                ),
            },
        ),
        (
            _('Important dates'),
            {
                'fields': (
                    'last_login',
                    'date_joined'
                )
            }
        )
    )


@register(IPAddress)
class IPAddressAdmin(ModelAdmin):
    pass
