'use strict';

describe('hmpoPrintPage', () => {
    it('renders with text', () => {
        const $ = render({ component: 'hmpoPrintPage', params: { text: 'test' } });
        const $component = $('.hmpo-print-page');
        expect(cleanHtml($component)).to.equal('<a data-module="hmpo-print-page" rel="alternate" href="#" class="govuk-link">test</a>');
    });

    it('renders with html', () => {
        const $ = render({ component: 'hmpoPrintPage', params: { html: '<b>html</b>' } });
        const $component = $('.hmpo-print-page');
        expect(cleanHtml($component)).to.equal('<a data-module="hmpo-print-page" rel="alternate" href="#" class="govuk-link"><b>html</b></a>');
    });

    it('renders with default text', () => {
        const $ = render({ component: 'hmpoPrintPage' });
        const $component = $('.hmpo-print-page');
        expect(cleanHtml($component)).to.equal('<a data-module="hmpo-print-page" rel="alternate" href="#" class="govuk-link">Print page</a>');
    });
});
