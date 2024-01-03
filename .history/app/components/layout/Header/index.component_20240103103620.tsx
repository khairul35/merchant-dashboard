const Component = () => {
    return (
        localStorage.getItem('isLogin') == 'true' ?
        <div
            className="navbar border-b shadow-black-200"
            style={{ backgroundColor: "#fff", color: "#000" }}
        >
            <h2 className="text-xl font-semibold pl-10">HOMA DESIGN</h2>
        </div>
        :
        <div
            className="navbar border-b shadow-black-200"
            style={{ backgroundColor: "#158BB8", color: "#fff" }}
        >
            test
        </div>
    )
};

export default Component;
