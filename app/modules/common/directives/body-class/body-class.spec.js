(function () {
    "use strict";

    describe("modules/common/directives/body-class/body-class.spec.js", function () {
        var rootScope,
            $compile;

        beforeEach(function () {
            module("santanderApp");
            module("santanderApp.common");
        });


        beforeEach(inject(function ($rootScope, $injector) {
            $compile = $injector.get("$compile");

            rootScope = $rootScope.$new();
        }));

        it("deve verificar que a diretiva inclui a classe informada no body", function () {
            var element = angular.element('<body-class class="my-class"></body-class>');

            $compile(element)(rootScope);
            rootScope.$digest();

            expect(angular.element("body").hasClass('my-class')).toBeTruthy();
        });

        it("deve verificar que a diretiva inclui multiplas classes no body", function () {
            var element = angular.element('<body-class class="my-class, other-class"></body-class>');

            $compile(element)(rootScope);
            rootScope.$digest();

            expect(angular.element("body").hasClass('my-class')).toBeTruthy();
            expect(angular.element("body").hasClass('other-class')).toBeTruthy();
        });
    });
})();
