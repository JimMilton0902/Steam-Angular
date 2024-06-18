import { Routes } from '@angular/router';
import { IndexdmComponent } from './danhmuc/indexdm/indexdm.component';
import { CreatedmComponent } from './danhmuc/createdm/createdm.component';
import { EditdmComponent } from './danhmuc/editdm/editdm.component';
import { ViewdmComponent } from './danhmuc/viewdm/viewdm.component';
import { IndexspComponent } from './sanpham/indexsp/indexsp.component';
import { CreatespComponent } from './sanpham/createsp/createsp.component';
import { EditspComponent } from './sanpham/editsp/editsp.component';
import { IndexuserComponent } from './user/indexuser/indexuser.component';
import { IndexghComponent } from './giohang/indexgh/indexgh.component';
import { HomeComponent } from './home/home.component';
import { CreateuserComponent } from './user/createuser/createuser.component';
import { ViewspComponent } from './sanpham/viewsp/viewsp.component';
import { AdminComponent } from './admin/admin.component';
import { IndexdmspComponent } from './dmsp/indexdmsp/indexdmsp.component';
import { IndexttComponent } from './thanhtoan/indextt/indextt.component';
import { ViewuserComponent } from './user/viewuser/viewuser.component';

export const routes: Routes = [
    //danh muc
    { path:"", redirectTo:'index', pathMatch:'full' },
    {path:'danhmuc/indexdm', component:IndexdmComponent},
    {path:'danhmuc/createdm', component:CreatedmComponent},
    {path:'danhmuc/editdm', component:EditdmComponent},
    {path:'danhmuc/viewdm', component:ViewdmComponent},
    {path:'danhmuc/createdm', component:CreatedmComponent},
    {path:'danhmuc/:DmId/edit', component:EditdmComponent},
    
    // san pham
    {path:'sanpham/indexsp', component:IndexspComponent},
    {path:'sanpham/createsp', component:CreatespComponent},
    {path:'sanpham/:SpId/edit', component:EditspComponent},
    {path:'sanpham/:SpId/ctsp', component: ViewspComponent},

    //dangnhap, dangky
    {path: 'user/dangky', component:CreateuserComponent},
    {path: 'user/dangnhap', component:IndexuserComponent},
    {path: 'user/view', component:ViewuserComponent},

    //giohang
    {path:'giohang/:SpId/index', component:IndexghComponent},
    {path:'giohang', component:IndexghComponent},

    //trang chu
    {path:'index', component:HomeComponent},

    //admin
    {path:'admin/index', component:AdminComponent},

    //san pham theo danh muc
    {path: 'dmsp/index', component:IndexdmspComponent},

    //thanh toan
    {path: 'thanhtoan/index', component: IndexttComponent},

];
