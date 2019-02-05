---
title: Aside modal (slide out)
componentid: component-slideout
variantid: modal
guid: some-random-and-unique-string-aside-modal
---
# Usage and description
**Framework needed!** Please note that the examples below is just a representation of how modals look and the needed markup. In order to use modals you need a framework to control when and how to show them. If you're using angular, please take a look at [ng-bootstrap](https://ng-bootstrap.github.io/) and their [modal component](https://ng-bootstrap.github.io/#/components/modal).

**The modals from bootstrap can be used for:**

- Normal modals (dialogues/alerts)
- Aside modals (slide-outs)
- Full screen modals (take-overs)

## Base state
This is the default state of the component
```html
<div  class="modal modal-aside modal-aside-right">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
</div>
<a href="https://sebgroup.github.io/bootstrap/modals" target="_blank">Show live examples</a>
```
