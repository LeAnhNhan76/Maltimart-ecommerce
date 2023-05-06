import './serviceItem.scss';

export interface IServiceItemData {
    icon: string;
    title: string;
    subtitle: string;
    bg: string;
}

export interface IServiceItemProps {
    item: IServiceItemData
}

const ServiceItem = (props: IServiceItemProps) => {
  const {item} = props;

  return (
    <div className="service-item" style={{backgroundColor: item.bg}}>
        <span>< i className={item.icon}></i></span>
        <div className="content">
            <h4>{item.title}</h4>
            <p>{item.subtitle}</p>
        </div>
    </div>
  )
}

export default ServiceItem