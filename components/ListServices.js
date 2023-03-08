const listServices = [
    {
        id: 1,
        title: 'Diseño de logotipos',
        path: 'diseno-de-logotipos',
        description: "Te diseñamos un logo de gran calidad estético y conceptual adaptada a las necesidades tu negocio.",
        photos: [
            {
                id: 1,
                src: '',
                alt: '',
                path: 'logo-ejemplo-f'
            }
        ]
    }
]

export function getService(path) {
    const indexService = listServices.findIndex((s) => s.path === path);
    return listServices[indexService];
}