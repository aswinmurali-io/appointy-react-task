import '../Card/card.css'

type CardType = {
    heading: string,
    icon: any, // TODO: change this later.
    description: string,
    pricing: number,
    points: string[],
    isFocus: boolean,
    buttonText: string,
}

const Card = ({
    heading,
    icon,
    isFocus,
    description,
    pricing,
    points,
    buttonText,
}: CardType) => (
    <div className='card'>
        <table style={{
            display: 'contents',
            justifyContent: 'center'
        }}>
            <tr style={{
                display: 'block',
                background: '#eeeeee',
                padding: '8px 0'
            }}>
                <tr className='heading'>
                    <tr className='title'>{heading}</tr>

                    {/* <th><td className='icon'>{icon}</td></th> */}
                </tr>
                <tr className='description'>
                    {description}
                </tr>
            </tr>

            <tr className='price'>
                <div className='value'>${pricing}</div>
                <div className='suffix'>/mo</div>
            </tr>
            <tr className='points'>
                {points.map((point) => (<p>{point}</p>))}
            </tr>
            <tr></tr>
            <tr>
                {
                    isFocus ?
                        <div className='button focus'>{buttonText}</div> :
                        <div className='button'>{buttonText}</div>
                }
            </tr>
        </table>
    </div>
)

export default Card;
