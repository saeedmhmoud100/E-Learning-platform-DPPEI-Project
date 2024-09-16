export const ProfileCard = ({backgroundColor, title, data}) => {
    return (
        <div className={`cartt bg-${backgroundColor || 'success'} d-flex flex-column justify-content-around rounded-5 p-4`}>
            <div className="cart-header fw-bold fs-1">
                {title}
            </div>
            <div className="w-100 d-flex justify-content-between align-items-center text-center">

                {
                    data?.map((item, index) => (
                        <>
                            <div key={index} className="d-flex flex-column">
                                <div className="fs-5">{item.label}</div>
                                <span>{item.value}</span>
                            </div>
                            {(index!==data.length-1) ? <div className="h-line"></div> : null}
                        </>
                    ))
                }
            </div>
        </div>
    )
}
