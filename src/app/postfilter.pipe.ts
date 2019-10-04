import { PipeTransform, Pipe } from '@angular/core';
@Pipe({
    name: 'postFilter'
})
export class postFilter implements PipeTransform {
    transform(posts: [], searchTerm: string) {
        return posts.filter(post => post.title.indexOf(searchTerm) !== -1);
    }
}
