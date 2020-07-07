
interface IPropsPage {
    children: React.ReactNode
}

interface IIndexProps {
    url: string,
    placeholder: string,
}

interface IContactProps {
    facebook: string,
    instagram: string
}
interface IClient {
    id: string,
    url: string,
    logo: {
        url: string
    }
}
interface IPropsAbout {
    description: string,
    images: string[]
}

interface ISocialMediaIconsProps {
    width: number,
    height: number,
    instagram: string,
    facebook: string,
    whatsapp: string
};

interface IPageTitleProps {
    light: string,
    bold: string
}

interface IShopCardItemProps {
    id: string,
    title: string,
    description: string,
    image: string
}
interface IShopCardItemProps {
    id: string,
    title: string,
    description: string,
    image: string
}

interface ILogoProps {
    width: number,
    height: number
};
interface IProduct {
    thumbnail: string,
    image: string,
    title: string,
    description: string,
    designer?: string,
    id: string
}

interface IShopProps {
    featured: IProduct[]
    notFeatured: IProduct[]
}

interface IProductProps {
    product: IProduct
}