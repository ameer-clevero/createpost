import { PipeTransform, Pipe } from '@angular/core';
@Pipe({
    name: 'postFilter'
})
export class postFilter implements PipeTransform {

    transform(posts, searchTerm: string) {
        if (posts) {
            return posts.filter(
                post => {
                    return post.title.indexOf(searchTerm) !== -1 || post.content.indexOf(searchTerm) !== -1 || post.id.toString().indexOf(searchTerm) !== -1
                })
        }
    }
}
