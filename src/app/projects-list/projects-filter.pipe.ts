import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'projectsFilter'
})
export class ProjectsFilterPipe implements PipeTransform {

  transform(items: any[], criteria?: string): any {

    console.log(criteria);
    if (criteria === 'all') { return items } else {
      return items.filter(item => {
        return item.getType() === criteria;
      });
    }
  }

}
