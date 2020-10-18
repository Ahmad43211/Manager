from rest_framework import routers
from .api import LeadViewSet,MarketingViewSet,CustomersViewSet,ProductDevelopmentViewSet,ProductOperationsViewSet,HRViewSet,ProfitLViewSet

router = routers.DefaultRouter()
router.register('api/leads', LeadViewSet, 'leads')
router.register('api/marketings', MarketingViewSet, 'marketings')
router.register('api/customers', CustomersViewSet, 'customers')
router.register('api/pds', ProductDevelopmentViewSet, 'pds')
router.register('api/pos', ProductOperationsViewSet, 'pos')
router.register('api/hrs', HRViewSet, 'hrs')
router.register('api/pls', ProfitLViewSet, 'pls')


urlpatterns = router.urls