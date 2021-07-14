import Nav from "../Nav"

const Header = (props)=>{
return(
    <header className="z-50">
          <nav className="bg-black text-white">
              <ul className="flex justify-between p-2 ">
                  <li className="ml-4"><i class="fas fa-home"></i> Hệ thống cửa hàng</li>
                  <li className="mr-4"><i class="fas fa-phone"></i> CSKH:0378939431</li>
              </ul>
          </nav>
          
          <Nav {...props}/>
    </header>
)
}
export default Header