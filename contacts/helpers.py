def get_filtered_query_search_params(query_params, allowed_fields, related_models_fields=None):
    if related_models_fields is None:
        related_models_fields = {}

    def convert_search_field_name(field_name):
        basic_field_name = f'{field_name}__icontains'
        if field_name not in related_models_fields:
            return basic_field_name
        return f'{related_models_fields[field_name]}__{basic_field_name}'

    return {convert_search_field_name(field_name): query_params.get(field_name) for field_name in allowed_fields if
            query_params.get(field_name) is not None}
