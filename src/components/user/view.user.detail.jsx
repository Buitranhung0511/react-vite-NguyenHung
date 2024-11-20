import { Drawer } from "antd";




const ViewUserDetail = (props) => {
    const { dataDetail, setDataDetail, isDataDetailOpen, setIsDataDetailOpen } = props
    return (

        <Drawer
            title="User Detail"
            onClose={() => {
                setDataDetail(null);
                setIsDataDetailOpen(false);
            }}
            open={isDataDetailOpen}
        >
            {dataDetail
                ?
                <>
                    <p>Id:{dataDetail._id}</p>
                    <br />
                    <p>Full Name:{dataDetail.fullName}</p>
                    <br />
                    <p>Email:{dataDetail.email}</p>
                    <br />
                    <p>Phone:{dataDetail.phone}</p>
                </>
                :
                <>
                    <h3 style={{color:"red"}}>Don't have any thing here !!!!</h3>
                </>
            }

        </Drawer>
    )
}

export default ViewUserDetail