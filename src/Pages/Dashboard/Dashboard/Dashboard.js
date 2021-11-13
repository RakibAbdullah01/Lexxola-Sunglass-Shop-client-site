import Button from '@restart/ui/esm/Button';
import React from 'react';
import {
    Link, Route, Switch, useHistory, useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddProduct from '../AddProduct/AddProduct';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import './Dashboard.css';

const Dashboard = () => {
    const {admin,user,logOut} = useAuth();
    const history = useHistory();
    let { path, url } = useRouteMatch();

    const handleLogOut = () =>{
        logOut();
        
        // redirect
        history.replace('/')
    }
    console.log(admin);
    return (
       <> 
    
    <div class="s-layout">
        {/* SideBar */}
        <div class="s-layout__sidebar">
            <a class="s-sidebar__trigger" href="#0">
                <i class="fa fa-bars"></i>
            </a>

            <nav class="s-sidebar__nav">
                <div className="user text-center py-4">
                    <h5>{user.displayName}</h5>
                </div>
                
                <ul>
                    
                    <li>
                        <Link class="s-sidebar__nav-link" to ="/home">
                            <i class="fa fa-home"></i><em>Home</em>
                        </Link>
                    </li>

                    <li>
                        <Link class="s-sidebar__nav-link" to ="/shop">
                            <i class="fa fa-shopping-bag"></i><em>Shop</em>
                        </Link>
                    </li>
                    
                    {!admin?(
                        <>
                            

                            <li>
                                <Link class="s-sidebar__nav-link" to={`${url}/pay`}>
                                <i class="fas fa-dollar-sign"></i><em>Pay</em>
                                </Link>
                            </li>

                            <li>
                                <Link class="s-sidebar__nav-link" to={`${url}/myorders`}>
                                <i class="fas fa-cart-plus"></i><em>My Orders</em>
                                </Link>
                            </li>
                            <li>
                                <Link class="s-sidebar__nav-link" to={`${url}/review`}>
                                <i class="fas fa-star"></i><em>Review</em>
                                </Link>
                            </li>

                            <li className="mt-5 pt-4 d-flex justify-content-center" >
                                <Button
                                onClick={handleLogOut} className="btn-grad">
                                    <i class="fa fa-user pe-2"></i> <em>  Log Out</em>
                                </Button>
                            </li>
                        </>

                    ):(
                        <>
                            

                            <li>
                                <Link class="s-sidebar__nav-link" to={`${url}/manageallorders`}>
                                <i class="fas fa-cart-plus"></i><em>Manage All Orders</em>
                                </Link>
                            </li>

                            <li>
                                <Link class="s-sidebar__nav-link" to={`${url}/addproduct`}>
                                    <i class="fa fa-plus"></i><em>Add Product</em>
                                </Link>
                            </li>
                            <li>
                                <Link class="s-sidebar__nav-link" to={`${url}/manageproducts`}>
                                <i class="fas fa-wrench"></i><em>Manage Products</em>
                                </Link>
                            </li>
                            <li>
                                <Link class="s-sidebar__nav-link" to={`${url}/makeadmin`}>
                                <i class="fas fa-user-cog"></i><em>Make Admin</em>
                                </Link>
                            </li>

                            <li className="mt-4 d-flex justify-content-center" >
                                <Button
                                onClick={handleLogOut} className="btn-grad">
                                    <i class="fa fa-user pe-2"></i> <em>  Log Out</em>
                                </Button>
                            </li>

                        </>
                    )}
                    
                    
                    

                    
                    
                </ul>

                
            </nav>
            
        </div>
        

        {/* COntent */}
        <main class="s-layout__content">
        <Switch>

            <Route exact path={path}>
                <DashboardHome/>
            </Route>            
            {/* User */}
            <Route exact path={`${path}/pay`}>
                <Pay/>
            </Route>
            <Route exact path={`${path}/myorders`}>
                <MyOrders/>
            </Route>
            <Route exact path={`${path}/review`}>
                <Review/>
            </Route>

            {/* Admin */}
            <AdminRoute path={`${path}/manageallorders`}>
                <ManageAllOrders/>
            </AdminRoute>

            <AdminRoute path={`${path}/addproduct`}>
                <AddProduct/>
            </AdminRoute>

            <AdminRoute path={`${path}/manageproducts`}>
                <ManageProducts/>
            </AdminRoute>
            <AdminRoute path={`${path}/makeadmin`}>
                <MakeAdmin/>
            </AdminRoute>


        </Switch>
        </main>
        </div>
        </>
    );
};

export default Dashboard;