import {Directive, Inject} from '../angular.js';

@Directive('jarvesLayout', {
    restrict: 'E'
})
@Inject('$scope, $element, $attrs')
export default class Layout {
    constructor($scope, $element, $attrs) {
        // console.log('new layout', scope, element);
    }
}