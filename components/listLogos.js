const listLogo = [
    {
        id: 1,
        title: 'EJEMPLO LOGO',
        description: 'DESCRIPTIOn',
        path: 'ejemplo-logo',
        picture: '',
        images: ['', '']
    }
]

export function getLogo(path) {
    const indexLogo = listLogo.findIndex((l) => l.path === path);
    return listLogo[indexLogo];
}