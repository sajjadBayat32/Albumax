import {NgModule, Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'sizeToText'})
export class sizeToText implements PipeTransform {
  transform(value: any) {
    const size_array = value.split('*')
    return (size_array[0] + '/5') + ' * ' + (size_array[1] + '/5')
  }
}

@NgModule({
  imports: [],
  declarations: [
    sizeToText,
  ],
  exports: [
    sizeToText,
  ]
})
export class AppPipesModule {
}
