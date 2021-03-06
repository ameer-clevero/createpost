import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { PostsComponent } from './posts/posts.component';
import { Routes, RouterModule } from '@angular/router';
import { PostService } from './services/post.service';
import { EditComponent } from './edit/edit.component';
import {
    HttpClientModule
} from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { postFilter } from './postfilter.pipe';
const routes: Routes = [
    { path: '', redirectTo: '/create', pathMatch: 'full' },
    { path: 'create', component: CreateComponent },
    { path: 'posts', component: PostsComponent },
    { path: 'edit/:id/:title/:content', component: EditComponent }

];
@NgModule({
    declarations: [
        AppComponent,
        CreateComponent,
        PostsComponent,
        PostComponent,
        EditComponent,
        postFilter
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes),
        HttpClientModule
    ],
    providers: [PostService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
