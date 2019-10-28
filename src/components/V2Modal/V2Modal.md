# Showing a Modal

Use the *V2Modal* Component to render a modal.

```js
import { V2Modal, V2Button, Headline, Paragraph } from '@lightelligence/react';
initialState = { modalOpen: false};
const toggleModal = () => {
  setState({ modalOpen: !state.modalOpen });
};
<div>
    <V2Button color="primary" onClick={toggleModal}>Basic Modal</V2Button>
    <V2Modal
      title="All will be fine"
      open={state.modalOpen}
      content='Lorem ipsum dolor sit amet'
      actions={[
        <V2Button key="ok" buttonType="action" onClick={toggleModal}>Ok</V2Button>
      ]}
    />
</div>
```

## Context variations

The *V2Modal* can be rendered with different variations based on the context.

We support the following types:
- `V2MODAL_TYPE_CRITICAL = 'critical'`<br/>
  Use the critical *V2Modal* whenever you want to communicate a critical or error state to the user. Especially when proceeding will likely lead to an undesired outcome for the user that he is probably not aware of. e.g.: Deleting a role will lead to users being deleted from the tenant because they have no role afterward.

- `V2MODAL_TYPE_WARNING = 'warning'`<br/>
  The warning *V2Modal* is used when needing to show important information e.g. to prevent errors. e.g.: 15 of your devices have not responded, check your device management.

- `V2MODAL_TYPE_INFO = 'info'`<br/>
  The info *V2Modal* can be used whenever an additional non-critical information should be provided to the user. The info will not have negative results no matter the users choice. e.g.: You have been invited to a tenant, accept or decline.

- `V2MODAL_TYPE_SUCCESS = 'success'`<br/>
  Use the success *V2Modal* to communicate a success message the user has to be made aware of. e.g.: You successfully finished an action.

- `V2MODAL_TYPE_ACTION = 'action'`<br/>
  Use the action *V2Modal* for changes that demand active user input. e.g.: Edit the description of a tenant.


```js
import { V2Modal, V2MODAL_TYPE_CRITICAL, V2MODAL_TYPE_SUCCESS, V2MODAL_TYPE_INFO, V2MODAL_TYPE_WARNING, V2MODAL_TYPE_ACTION, V2Button, FloatingList } from '@lightelligence/react';
initialState = { modalOpen: {
  error: false,
  warning: false,
  info: false,
  success: false,
  action: false,
}};
const toggleModal = (type) => {
  setState({ modalOpen: {
    ...state.modalOpen,
    [type]: !state.modalOpen[type]
  }});
};

const onSubmit = (type) => {
  alert('All errors have been fixed!');
  setState({ modalOpen: {
    ...state.modalOpen,
    [type]: false
  }});
};
<div>
  <FloatingList>
    <V2Button buttonType="destructive" onClick={() => toggleModal('error')}>Open Error Modal</V2Button>
    <V2Button buttonType="default" onClick={() => toggleModal('warning')}>Open Warning Modal</V2Button>
    <V2Button buttonType="default" onClick={() => toggleModal('info')}>Open Info Modal</V2Button>
    <V2Button buttonType="confirmative" onClick={() => toggleModal('success')}>Open Success Modal</V2Button>
    <V2Button buttonType="action" onClick={() => toggleModal('action')}>Open Action Modal</V2Button>
  </FloatingList>
  <V2Modal
    type={V2MODAL_TYPE_CRITICAL}
    title="Error!!!!!"
    content="Lorem ipsum dolor sit amet."
    open={state.modalOpen.error}
    actions={[
      <V2Button
        key="cancel"
        buttonType="default"
        emphasis="tertiary"
        onClick={() => toggleModal('error')}
      >
        Cancel
      </V2Button>,
      <V2Button
        key="ok"
        buttonType="destructive"
        onClick={() => onSubmit('error')}
      >
        Ok
      </V2Button>
    ]}/>
  <V2Modal
    type={V2MODAL_TYPE_WARNING}
    title="Warning!"
    content="Lorem ipsum dolor sit amet."
    open={state.modalOpen.warning}
    actions={[
      <V2Button
        key="cancel"
        buttonType="default"
        emphasis="tertiary"
        onClick={() => toggleModal('warning')}
      >
        Cancel
      </V2Button>,
      <V2Button
        key="ok"
        buttonType="destructive"
        onClick={() => onSubmit('warning')}
      >
        Ok
      </V2Button>
    ]}/>
  <V2Modal
    type={V2MODAL_TYPE_INFO}
    title="Info!"
    content="Lorem ipsum dolor sit amet."
    open={state.modalOpen.info}
    actions={[
      <V2Button
        key="cancel"
        buttonType="default"
        emphasis="tertiary"
        onClick={() => toggleModal('info')}
      >
        Cancel
      </V2Button>,
      <V2Button
        key="ok"
        buttonType="destructive"
        onClick={() => onSubmit('info')}
      >
        Ok
      </V2Button>
    ]}/>
  <V2Modal
    type={V2MODAL_TYPE_SUCCESS}
    title="SUCCESS!!"
    content="Lorem ipsum dolor sit amet."
    open={state.modalOpen.success}
    actions={[
      <V2Button
        key="cancel"
        buttonType="default"
        emphasis="tertiary"
        onClick={() => toggleModal('success')}
      >
        Cancel
      </V2Button>,
      <V2Button
        key="ok"
        buttonType="destructive"
        onClick={() => onSubmit('success')}
      >
        Ok
      </V2Button>
    ]}/>
  <V2Modal
    type={V2MODAL_TYPE_ACTION}
    title="Action!!"
    content="Lorem ipsum dolor sit amet."
    open={state.modalOpen.action}
    actions={[
      <V2Button
        key="cancel"
        buttonType="default"
        emphasis="tertiary"
        onClick={() => toggleModal('action')}
      >
        Cancel
      </V2Button>,
      <V2Button
        key="ok"
        buttonType="destructive"
        onClick={() => onSubmit('action')}
      >
        Ok
      </V2Button>
    ]}/>
</div>
```

## Custom Header Modals

In rare occasions the icon can be individually changed. Use the `icon` property to provide an icon.
You can also change the background color of the header using the `headerProps` property.

All styles of the modal can be changed using `modalProps`, `dialogProps`, `headerProps`, `contentProps`, and `footerProps`. *Use with care!*



```js
import classnames from 'classnames';
import { V2Modal, V2Button, Icon, Headline, Paragraph } from '@lightelligence/react';
import * as olt from '@lightelligence/styles';
initialState = { modalOpen: false};
const toggleModal = () => {
  setState({modalOpen: !state.modalOpen});
};
<div>
    <V2Button buttonType="default" onClick={toggleModal}>Modified Header and More Content</V2Button>
    <V2Modal
      title='Headline'
      icon={<Icon name="action-add-default" color="primary" />}
      headerProps={{style: {backgroundColor: 'black'}}}
      open={state.modalOpen}
      content={
        <>
          <Headline>Headline</Headline>
          <Paragraph>
            Lorem ipsum dolor sit amet
          </Paragraph>
        </>
      }
      actions={[
        <V2Button key="ok" buttonType="action" onClick={toggleModal}>Ok</V2Button>
      ]}
    />
</div>
```


```js
import { V2Modal, V2Button, V2ModalContent, Paragraph } from '@lightelligence/react';
initialState = { modalOpen: false };
const toggleModal = () => {
  setState({modalOpen: !state.modalOpen});
};
<div>
  <V2Button buttonType="confirmative" onClick={toggleModal}>Wide Modal</V2Button>
  <V2Modal
    open={state.modalOpen}
    wide
    content={
      <section>
        <Paragraph>
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </Paragraph>
        <Paragraph>
          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </Paragraph>
        <Paragraph>
          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </Paragraph>
        <Paragraph>
          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </Paragraph>
        <Paragraph>
          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </Paragraph>
      </section>
    }
    actions={[
      <V2Button
        key="ok"
        buttonType="confirmative"
        onClick={toggleModal}
      >
        Ok
      </V2Button>
    ]}/>
</div>
```
