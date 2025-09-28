type ServiceType = {
    popular:boolean;
    icon: ElementType;
    category: string;
    title: string;
    description: string;
    link: string;
    duration: string;
    features: string[];
    price: number;
}

type ServiceCardProps = {
    service: ServiceType;
    index: number;
}
