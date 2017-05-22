import { PipeTransform, Pipe } from '@angular/core';

import { IPlayer } from './player';

@Pipe({
    name: 'playerFilter'
})

export class PlayerFilterPipe implements PipeTransform {

    transform(value: IPlayer[], filterBy: string): IPlayer[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((player: IPlayer) => 
        player.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value ;
    }
}