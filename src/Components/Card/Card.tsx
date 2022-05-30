type CardType = {
    title: string
    description: string
}

const Card = ({ title, description }: CardType) => (
    <div className='top'>
        <p>{title}</p>
        <p>{description}</p>
    </div>
)

export default Card;
