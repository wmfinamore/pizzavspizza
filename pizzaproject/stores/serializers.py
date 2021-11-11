from rest_framework import serializers
from .models import Pizzeria, Image
from rest_framework.reverse import reverse


class PizzeriaListSerializer(serializers.ModelSerializer):
    absolute_url = serializers.SerializerMethodField()

    class Meta:
        model = Pizzeria
        fields = [
            'id',
            'pizzeria_name',
            'city',
            'zip_code',
            'absolute_url',
        ]

    def get_absolute_url(self, obj):
        return reverse('pizzeria_detail', args=(obj.pk,))


class ImageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        fields = ['id', 'image', 'image_title', 'uploaded_at']
        model = Image


class PizzeriaDetailSerializer(serializers.ModelSerializer):
    update = serializers.SerializerMethodField()
    delete = serializers.SerializerMethodField()
    pizzeria_images = ImageSerializer(many=True, required=False)

    class Meta:
        model = Pizzeria
        fields = ['id',
                  'pizzeria_name',
                  'street',
                  'city',
                  'state',
                  'zip_code',
                  'website',
                  'phone_number',
                  'description',
                  'logo_image',
                  'email',
                  'active',
                  'update',
                  'delete',
                  'pizzeria_images',
                  ]

    def get_update(self, obj):
        return reverse('pizzeria_update', args=(obj.pk,))

    def get_delete(self, obj):
        return reverse('pizzeria_delete', args=(obj.pk,))

