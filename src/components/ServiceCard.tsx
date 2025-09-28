import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowRight, Clock, Star } from "lucide-react";

export default function ServiceCard({ service, index }: ServiceCardProps){
    const IconComponent = service.icon;
    
    return (
        <Card 
            key={index} 
            className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
            service.popular ? 'ring-2 ring-blue-200 bg-gradient-to-br from-white to-blue-50' : 'bg-white'
            }`}
        >
            {/* Popular Badge */}
            {service.popular && (
            <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-lg">
                <Star className="h-3 w-3 mr-1" />
                Popular
                </Badge>
            </div>
            )}

            {/* Card Header */}
            <CardHeader className="pb-6 pt-8">
            <div className="flex items-start justify-between mb-4">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                service.popular 
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg' 
                    : 'bg-gradient-to-br from-slate-100 to-slate-200 group-hover:from-blue-100 group-hover:to-blue-200'
                }`}>
                <IconComponent className={`h-8 w-8 transition-colors duration-300 ${
                    service.popular ? 'text-white' : 'text-slate-700 group-hover:text-blue-700'
                }`} />
                </div>
                <Badge variant="secondary" className="text-xs font-medium">
                {service.category}
                </Badge>
            </div>
            
            <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                {service.title}
            </CardTitle>
            </CardHeader>

            {/* Card Content */}
            <CardContent className="space-y-6">
            <CardDescription className="text-slate-600 leading-relaxed text-base">
                {service.description}
            </CardDescription>

            {/* Features List */}
            <div className="space-y-3">
                {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-sm text-slate-600 group-hover:text-slate-700 transition-colors">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                    {feature}
                </div>
                ))}
            </div>
            
            {/* Price Section */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-100">
                <div className="flex items-center justify-center gap-2">
                    <span className="text-2xl font-bold text-blue-600">₹{service.price}</span>
                </div>
            </div>

            {/* CTA Button */}
            <Link href={service.link} className="block">
                <Button 
                className={`w-full group/btn transition-all duration-300 ${
                    service.popular 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl' 
                    : 'bg-slate-900 hover:bg-blue-600 text-white hover:shadow-lg'
                }`}
                >
                Learn More 
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Button>
            </Link>
            </CardContent>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500 pointer-events-none"></div>
        </Card>
    )
}