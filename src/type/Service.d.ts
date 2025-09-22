type ServiceType = {
    popular:boolean;
    icon: ElementType;
    category: string;
    title: string;
    description: string;
    link: string;
    duration: string;
    features: string[];
}

type ServiceCardProps = {
    service: ServiceType;
    index: number;
}
