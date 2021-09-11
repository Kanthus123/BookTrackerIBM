from rest_framework import routers
from .api import LivroViewSet

router = routers.DefaultRouter()
router.register('api/booktrackerapi', LivroViewSet, 'booktrackerapi')

urlpatterns = router.urls
