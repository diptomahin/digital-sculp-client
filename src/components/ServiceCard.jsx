import { Card } from 'flowbite-react';

const ServiceCard = ({service}) => {
    return (
        <Card
        className="max-w-sm"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={service.image}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {service.name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
         {
            service.description
         }
        </p>
        {
            service.features.map(feature=><li key={feature}>{feature}</li>)
        }
      </Card>
    );
};

export default ServiceCard;