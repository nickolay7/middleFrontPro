export const getQueryParams = (params: OptionalRecord<string, string>) => {
    const searchParams = new URLSearchParams({});

    Object.entries(params).forEach(([key, value]) => {
        if (value) searchParams.set(key, value);
    });

    return `?${searchParams.toString()}`;
};

/**
 * Функция добавления параметров строки запроса в URL
 * @param params
 */
export const addQueryParams = (params: OptionalRecord<string, string>) => {
    window.history.pushState(null, '', getQueryParams(params));
};
