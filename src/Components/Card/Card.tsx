import '../Card/card.css'

type CardType = {
    heading: string,
    icon: any, // TODO: change this later.
    description: string,
    pricing: number,
    points: string[],
    isSelected: boolean,
    buttonText: string,
}

const Card = ({
    heading,
    icon,
    description,
    pricing,
    points,
    isSelected,
    buttonText,
}: CardType) => (
    <div className='card'>
        <table>
            <tr className='heading'>
                <tr>
                    <td className='title'>{heading}</td>
                    {/* <th>
                        
                        <td className='icon'>{icon}</td>
                    </th> */}
                </tr>
                <tr className='description'>
                    {description}
                </tr>
            </tr>
            <tr>
                $0/mo
            </tr>
            <tr className='points'>
                {points.map((point) => (<p>{point}</p>))}
            </tr>
            <tr></tr>
            <tr>
                <div className='button'>{buttonText}</div>
            </tr>
        </table>
    </div>
)

export default Card;
