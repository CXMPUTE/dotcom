import * as Icon from 'react-feather';

interface CardProps {
    name: string;
    cost: number;
    specs: {
        location: { continent: string, city: string; },
        cpu: { model: string; speed: string; },
        memory: { type: string; speed: string; },
        storage: { type: string; total: string; },
    };
    features: string[];
}

const Card = ({ name, cost, specs, features }: CardProps) => (
    <div className={'bg-gray-900 rounded-xl text-lg text-white font-bold p-2 m-2 text-center opacity-100'}>
        <p className={'text-xl text-orange-500 uppercase my-4'}>{name}</p>
        <p className={'text-7xl text-gray-400 uppercase'}>${cost}<span className={'text-sm'}>/mo</span></p>
        <div className={'inline-block mt-6 mb-4 text-left'}>
            <p className={'flex items-center font-semibold text-gray-300'}><Icon.Globe className={'mr-1 text-orange-500'} size={16} />{specs.location.continent}</p>
            <p className={'ml-5 mb-1 font-semibold text-sm text-gray-500'}>{specs.location.city}</p>
            <p className={'flex items-center font-semibold text-gray-300'}><Icon.Cpu className={'mr-1 text-orange-500'} size={16} />{specs.cpu.model}</p>
            <p className={'ml-5 mb-1 font-semibold text-sm text-gray-500'}>{specs.cpu.speed}</p>
            <p className={'flex items-center font-semibold text-gray-300'}><Icon.PieChart className={'mr-1 text-orange-500'} size={16} />{specs.memory.type}</p>
            <p className={'ml-5 mb-1 font-semibold text-sm text-gray-500'}>{specs.memory.speed}</p>
            <p className={'flex items-center font-semibold text-gray-300'}><Icon.HardDrive className={'mr-1 text-orange-500'} size={16} />{specs.storage.type}</p>
            <p className={'ml-5 mb-1 font-semibold text-sm text-gray-500'}>{specs.storage.total}</p>
            <hr className="my-3 h-px bg-gray-700 border-0" />
            {features.map((feature, key) => (
                <p className={'flex items-center font-semibold text-gray-300'} key={key}><Icon.CheckCircle className={'mr-1 text-orange-500'} size={16} />{feature}</p>
            ))}
        </div>
    </div>
);

export default Card;
