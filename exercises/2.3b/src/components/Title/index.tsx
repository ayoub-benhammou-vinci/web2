interface TitleProps {
    titleText: string
}

const Title = (props : TitleProps) => {
    return (
        <h1>{props.titleText}</h1>
    )
}

export default Title;