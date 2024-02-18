<x-menuitem>
  <x-label><x-message href="#file" autocapitalize></x-message></x-label>

  <x-menu>
    <x-menuitem value="new">
      <x-label><x-message href="#new" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Control+N"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="newFromSelected">
      <x-label><x-message href="#new-from-selected" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Control+Shift+N"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="newFromClipboard">
      <x-label><x-message href="#new-from-clipboard" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Control+Alt+Shift+N"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="newFromURL">
      <x-label><x-message href="#new-from-url" ellipsis autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="openFromDisk">
      <x-label><x-message href="#open" ellipsis autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Control+O"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="openFromCloud">
      <x-label><x-message href="#open-from-cloud" ellipsis autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem id="open-recent-menu-item">
      <x-label><x-message href="#open-recent" autocapitalize></x-message></x-label>
      <x-menu id="open-recent-menu"></x-menu>
    </x-menuitem>

    <hr/>

    <x-menuitem value="save">
      <x-label><x-message href="#save" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Control+S"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="saveToDiskAs">
      <x-label><x-message href="#save-as" ellipsis autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Control+Shift+S"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="saveToCloudAs">
      <x-label><x-message href="#save-to-cloud-as" ellipsis autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="import">
      <x-label><x-message href="#import" ellipsis autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="importFromURL">
      <x-label><x-message href="#import-from-url" ellipsis autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="export">
      <x-label><x-message href="#export--verb" ellipsis autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Control+E"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="share">
      <x-label><x-message href="#share" ellipsis autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="embed">
      <x-label><x-message href="#embed" ellipsis autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="print">
      <x-label><x-message href="#print" ellipsis autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Control+P"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="reload">
      <x-label><x-message href="#reload" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="close">
      <x-label><x-message href="#close" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Control+W"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>
  </x-menu>
</x-menuitem>

<x-menuitem>
  <x-label><x-message href="#edit" autocapitalize></x-message></x-label>

  <x-menu>
    <x-menuitem value="undo">
      <x-label><x-message href="#undo" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Control+Z"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="redo">
      <x-label><x-message href="#redo" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Control+Shift+Z"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="cut">
      <x-label><x-message href="#cut" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Control+X"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="copy">
      <x-label><x-message href="#copy" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Control+C"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="copyAsBitmap">
      <x-label><x-message href="#copy-as-bitmap" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="paste">
      <x-label><x-message href="#paste" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Control+V"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="duplicate">
      <x-label><x-message href="#duplicate" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Control+D"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="delete">
      <x-label><x-message href="#delete" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="selectAll">
      <x-label><x-message href="#select-all" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Control+A"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="deselectAll">
      <x-label><x-message href="#deselect-all" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Control+Shift+A"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>
  </x-menu>
</x-menuitem>

<x-menuitem>
  <x-label><x-message href="#view" autocapitalize></x-message></x-label>

  <x-menu>
    <x-menuitem value="manualGuides">
      <x-label><x-message href="#manual-guides" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="F1"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="smartGuides">
      <x-label><x-message href="#smart-guides" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="F2"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="grid">
      <x-label><x-message href="#grid" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="F3"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="transparency">
      <x-label><x-message href="#transparency" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="F4"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="views">
      <x-label><x-message href="#views" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="F5"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="rulers">
      <x-label><x-message href="#rulers" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="F6"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="zoomIn">
      <x-label><x-message href="#zoom-in" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="="></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="zoomOut">
      <x-label><x-message href="#zoom-out" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="-"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="resetZoom">
      <x-label><x-message href="#reset-zoom" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="`"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="zoomToFitAllViews">
      <x-label><x-message href="#zoom-to-fit-all-views" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="1"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="zoomToFitAllObjects">
      <x-label><x-message href="#zoom-to-fit-all-objects" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="2"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="zoomToFitSelectedObjects">
      <x-label><x-message href="#zoom-to-fit-selected-objects" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="3"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="playAnimations">
      <x-label><x-message href="#play-animations" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="pauseAnimations">
      <x-label><x-message href="#pause-animations" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="backwardOneSecond">
      <x-label><x-message href="#backward-1-second" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Alt+ArrowLeft"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="forwardOneSecond">
      <x-label><x-message href="#forward-1-second" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Alt+ArrowRight"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="jumpToStart">
      <x-label><x-message href="#jump-to-start" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Alt+Shift+ArrowLeft"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="jumpToEnd">
      <x-label><x-message href="#jump-to-end" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Alt+Shift+ArrowRight"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>
  </x-menu>
</x-menuitem>

<x-menuitem>
  <x-label><x-message href="#object" autocapitalize></x-message></x-label>

  <x-menu>
    <x-menuitem value="group">
      <x-label><x-message href="#group--verb" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Control+G"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="ungroup">
      <x-label><x-message href="#ungroup" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Control+Shift+G"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="lock">
      <x-label><x-message href="#lock" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="unlock">
      <x-label><x-message href="#unlock" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="unlockAll">
      <x-label><x-message href="#unlock-all" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="hide">
      <x-label><x-message href="#hide" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="unhide">
      <x-label><x-message href="#unhide" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="unhideAll">
      <x-label><x-message href="#unhide-all" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="clip">
      <x-label><x-message href="#clip" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="unclip">
      <x-label><x-message href="#unclip" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="mask">
      <x-label><x-message href="#mask" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="unmask">
      <x-label><x-message href="#unmask" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem>
      <x-label><x-message href="#opacity" autocapitalize></x-message></x-label>
      <x-menu>
        <x-menuitem value="increaseOpacity">
          <x-label><x-message href="#increase" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut" value="Control+="></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>

        <x-menuitem value="decreaseOpacity">
          <x-label><x-message href="#decrease" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut" value="Control+-"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>
      </x-menu>
    </x-menuitem>

    <hr/>

    <x-menuitem value="raise">
      <x-label><x-message href="#order.raise" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="]"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="lower">
      <x-label><x-message href="#order.lower" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="["></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="raiseToFront">
      <x-label><x-message href="#order.raise-to-front" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Control+]"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="lowerToBack">
      <x-label><x-message href="#order.lower-to-back" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Control+["></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem>
      <x-label><x-message href="#align-to-view" autocapitalize></x-message></x-label>
      <x-menu>
        <x-menuitem value="alignLeftToView">
          <x-label><x-message href="#position.left" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut" value="Control+ArrowLeft"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>

        <x-menuitem value="alignRightToView">
          <x-label><x-message href="#position.right" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut" value="Control+ArrowRight"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>


        <x-menuitem value="alignTopToView">
          <x-label><x-message href="#position.top" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut" value="Control+ArrowUp"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>

        <x-menuitem value="alignBottomToView">
          <x-label><x-message href="#position.bottom" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut" value="Control+ArrowDown"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>

        <hr/>

        <x-menuitem value="centerToView">
          <x-label><x-message href="#center" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>

        <x-menuitem value="centerHorizontallyToView">
          <x-label><x-message href="#center-horizontally" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>

        <x-menuitem value="centerVerticallyToView">
          <x-label><x-message href="#center-vertically" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>

        <hr/>

        <x-menuitem value="stretchToView">
          <x-label><x-message href="#stretch" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>

        <x-menuitem value="stretchHorizontallyToView">
          <x-label><x-message href="#stretch-horizontally" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>

        <x-menuitem value="stretchVerticallyToView">
          <x-label><x-message href="#stretch-vertically" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>

        <hr/>

        <x-menuitem value="fitToView">
          <x-label><x-message href="#fit" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>

        <x-menuitem value="fitHorizontallyToView">
          <x-label><x-message href="#fit-horizontally" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>

        <x-menuitem value="fitVerticallyToView">
          <x-label><x-message href="#fit-vertically" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>
      </x-menu>
    </x-menuitem>

    <x-menuitem>
      <x-label><x-message href="#align-to-first-selected" autocapitalize></x-message></x-label>
      <x-menu>
        <x-menuitem value="alignLeftToFirstSelected">
          <x-label><x-message href="#position.left" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut" value="Control+Shift+ArrowLeft"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>

        <x-menuitem value="alignRightToFirstSelected">
          <x-label><x-message href="#position.right" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut" value="Control+Shift+ArrowRight"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>


        <x-menuitem value="alignTopToFirstSelected">
          <x-label><x-message href="#position.top" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut" value="Control+Shift+ArrowUp"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>

        <x-menuitem value="alignBottomToFirstSelected">
          <x-label><x-message href="#position.bottom" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut" value="Control+Shift+ArrowDown"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>

        <hr/>

        <x-menuitem value="centerToFirstSelected">
          <x-label><x-message href="#center" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>

        <x-menuitem value="centerHorizontallyToFirstSelected">
          <x-label><x-message href="#center-horizontally" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>

        <x-menuitem value="centerVerticallyToFirstSelected">
          <x-label><x-message href="#center-vertically" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>

        <hr/>

        <x-menuitem value="stretchToFirstSelected">
          <x-label><x-message href="#stretch" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>

        <x-menuitem value="stretchHorizontallyToFirstSelected">
          <x-label><x-message href="#stretch-horizontally" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>

        <x-menuitem value="stretchVerticallyToFirstSelected">
          <x-label><x-message href="#stretch-vertically" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>

        <hr/>

        <x-menuitem value="fitToFirstSelected">
          <x-label><x-message href="#fit" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>

        <x-menuitem value="fitHorizontallyToFirstSelected">
          <x-label><x-message href="#fit-horizontally" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>

        <x-menuitem value="fitVerticallyToFirstSelected">
          <x-label><x-message href="#fit-vertically" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>
      </x-menu>
    </x-menuitem>

    <hr/>

    <x-menuitem value="rotateClockwise">
      <x-label><x-message href="#rotate-clockwise" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="rotateCounterclockwise">
      <x-label><x-message href="#rotate-counterclockwise" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="flipX">
      <x-label><x-message href="#flip-x" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="flipY">
      <x-label><x-message href="#flip-y" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="removeTransform">
      <x-label><x-message href="#remove-transform" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="reduceTransform">
      <x-label><x-message href="#reduce-transform" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="rasterize">
      <x-label><x-message href="#rasterize" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>
  </x-menu>
</x-menuitem>

<x-menuitem>
  <x-label><x-message href="#shape" autocapitalize></x-message></x-label>

  <x-menu>
    <x-menuitem value="grabPaintColor">
      <x-label><x-message href="#grab-paint-color" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Q"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem>
      <x-label><x-message href="#fill-opacity" autocapitalize></x-message></x-label>
      <x-menu>
        <x-menuitem value="increaseFillOpacity">
          <x-label><x-message href="#increase" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>

        <x-menuitem value="decreaseFillOpacity">
          <x-label><x-message href="#decrease" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>
      </x-menu>
    </x-menuitem>

    <x-menuitem>
      <x-label><x-message href="#stroke-opacity" autocapitalize></x-message></x-label>
      <x-menu>
        <x-menuitem value="increaseStrokeOpacity">
          <x-label><x-message href="#increase" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>

        <x-menuitem value="decreaseStrokeOpacity">
          <x-label><x-message href="#decrease" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>
      </x-menu>
    </x-menuitem>

    <hr/>

    <x-menuitem value="reorient">
      <x-label><x-message href="#reorient" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="reverse">
      <x-label><x-message href="#reverse" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="unite">
      <x-label><x-message href="#boolean-operations.unite" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="subtract">
      <x-label><x-message href="#boolean-operations.subtract" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="intersect">
      <x-label><x-message href="#boolean-operations.intersect" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="exclude">
      <x-label><x-message href="#boolean-operations.exclude" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="shapeToPath">
      <x-label><x-message href="#shape-to-path" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="strokeToPath">
      <x-label><x-message href="#stroke-to-path" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="joinPaths">
      <x-label><x-message href="#join-paths" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="splitPath">
      <x-label><x-message href="#split-paths" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="openPath">
      <x-label><x-message href="#open-path" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="closePath">
      <x-label><x-message href="#close-path" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="insetPath">
      <x-label><x-message href="#inset-path" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="outsetPath">
      <x-label><x-message href="#outset-path" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="simplifyPath">
      <x-label><x-message href="#simplify-path" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="complexifyPath">
      <x-label><x-message href="#complexify-path" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="joinNodes">
      <x-label><x-message href="#join-nodes" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="splitNode">
      <x-label><x-message href="#split-nodes" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="deleteNode">
      <x-label><x-message href="#delete-nodes" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="breakNode">
      <x-label><x-message href="#break-nodes" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>
  </x-menu>
</x-menuitem>

<x-menuitem>
  <x-label><x-message href="#text" autocapitalize></x-message></x-label>

  <x-menu>
    <x-menuitem value="bold">
      <x-label><x-message href="#bold" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Control+B"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="italic">
      <x-label><x-message href="#italic" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Control+I"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem>
      <x-label><x-message href="#font-size" autocapitalize></x-message></x-label>
      <x-menu>
        <x-menuitem value="increaseFontSize">
          <x-label><x-message href="#increase" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut" value="Control+Shift+="></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>

        <x-menuitem value="decreaseFontSize">
          <x-label><x-message href="#decrease" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut" value="Control+Shift+-"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>
      </x-menu>
    </x-menuitem>

    <hr/>

    <x-menuitem value="underline">
      <x-label><x-message href="#text-decoration.underline" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Control+U"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="lineThrough">
      <x-label><x-message href="#text-decoration.line-through" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="overline">
      <x-label><x-message href="#text-decoration.overline" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="capitalize">
      <x-label><x-message href="#text-transform.capitalize" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="uppercase">
      <x-label><x-message href="#text-transform.uppercase" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="lowercase">
      <x-label><x-message href="#text-transform.lowercase" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem>
      <x-label><x-message href="#letter-spacing" autocapitalize></x-message></x-label>
      <x-menu>
        <x-menuitem value="increaseLetterSpacing">
          <x-label><x-message href="#increase" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>

        <x-menuitem value="decreaseLetterSpacing">
          <x-label><x-message href="#decrease" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>

        <hr/>

        <x-menuitem value="resetLetterSpacing">
          <x-label><x-message href="#reset" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>
      </x-menu>
    </x-menuitem>

    <x-menuitem>
      <x-label><x-message href="#word-spacing" autocapitalize></x-message></x-label>
      <x-menu>
        <x-menuitem value="increaseWordSpacing">
          <x-label><x-message href="#increase" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>

        <x-menuitem value="decreaseWordSpacing">
          <x-label><x-message href="#decrease" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>

        <hr/>

        <x-menuitem value="resetWordSpacing">
          <x-label><x-message href="#reset" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>
      </x-menu>
    </x-menuitem>

    <x-menuitem>
      <x-label><x-message href="#line-spacing" autocapitalize></x-message></x-label>
      <x-menu>
        <x-menuitem value="increaseLineSpacing">
          <x-label><x-message href="#increase" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>


        <x-menuitem value="decreaseLineSpacing">
          <x-label><x-message href="#decrease" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>

        <hr/>

        <x-menuitem value="resetLineSpacing">
          <x-label><x-message href="#reset" autocapitalize></x-message></x-label>
          <x-shortcut class="default-shortcut"></x-shortcut>
          <x-shortcut class="user-shortcut"></x-shortcut>
        </x-menuitem>
      </x-menu>
    </x-menuitem>

    <hr/>

    <x-menuitem value="textOnPath">
      <x-label><x-message href="#text-on-path" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>
  </x-menu>
</x-menuitem>

<x-menuitem>
  <x-label><x-message href="#tool" autocapitalize></x-message></x-label>

  <x-menu>
    <x-menuitem value="previousTool">
      <x-label><x-message href="#previous-tool" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="transformTool" togglable>
      <x-label><x-message href="#transform" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Shift+T"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="editTool" togglable>
      <x-label><x-message href="#edit" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Shift+E"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="panTool" togglable>
      <x-label><x-message href="#pan" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Shift+P"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="splineTool" togglable>
      <x-label><x-message href="#spline" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Shift+S"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="freehandTool" togglable>
      <x-label><x-message href="#freehand" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Shift+F"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="blobTool" togglable>
      <x-label><x-message href="#blob" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Shift+B"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="rectTool" togglable>
      <x-label><x-message href="#rectangle" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Shift+R"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="ellipseTool" togglable>
      <x-label><x-message href="#ellipse" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Shift+C"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="otherShapeTool" togglable>
      <x-label><x-message href="#other-shape" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Shift+O"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="textTool" togglable>
      <x-label><x-message href="#text" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Shift+Z"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="textPathTool" togglable>
      <x-label><x-message href="#text-path" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Shift+X"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="viewTool" togglable>
      <x-label><x-message href="#view" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Shift+V"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="manualGuideTool" togglable>
      <x-label><x-message href="#manual-guide" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Shift+G"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>
  </x-menu>
</x-menuitem>

<x-menuitem>
  <x-label><x-message href="#window" autocapitalize></x-message></x-label>

  <x-menu>
    <x-menuitem value="commandsPanel">
      <x-label><x-message href="#commands" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="/"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="cloud">
      <x-label><x-message href="#cloud" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Control+/"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="fillPanel" togglable>
      <x-label><x-message href="#fill" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="F"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="strokePanel" togglable>
      <x-label><x-message href="#stroke" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="S"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="compositingPanel" togglable>
      <x-label><x-message href="#compositing" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="C"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="typographyPanel" togglable>
      <x-label><x-message href="#typography" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="T"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="geometryPanel" togglable>
      <x-label><x-message href="#geometry" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="G"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="metaPanel" togglable>
      <x-label><x-message href="#meta" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="M"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="shapePanel" togglable>
      <x-label><x-message href="#shape" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="X"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="arrangementPanel" togglable>
      <x-label><x-message href="#arrangement" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="A"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="objectsPanel" togglable>
      <x-label><x-message href="#objects" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="O"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="defsPanel" togglable>
      <x-label><x-message href="#defs" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="D"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="libraryPanel" togglable>
      <x-label><x-message href="#library" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="L"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="generatorsPanel" togglable>
      <x-label><x-message href="#generators" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="Z"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="exportPanel" togglable>
      <x-label><x-message href="#export" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="E"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="historyPanel" togglable>
      <x-label><x-message href="#history" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="H"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="elementsPanel">
      <x-label><x-message href="#elements" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="I"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="animationsPanel">
      <x-label><x-message href="#animations" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut" value="V"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>
  </x-menu>
</x-menuitem>

<x-menuitem>
  <x-label><x-message href="#help" autocapitalize></x-message></x-label>

  <x-menu>
    <x-menuitem value="about">
      <x-label><x-message href="#about" autocapitalize></x-message></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="homepage">
      <x-label><x-message href="#homepage" autocapitalize></x-message> <x-icon href="#open"></x-icon></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="blog">
      <x-label><x-message href="#blog" autocapitalize></x-message> <x-icon href="#open"></x-icon></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="tutorials">
      <x-label><x-message href="#tutorials" autocapitalize></x-message> <x-icon href="#open"></x-icon></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="ideas">
      <x-label><x-message href="#ideas" autocapitalize></x-message> <x-icon href="#open"></x-icon></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="bugs">
      <x-label><x-message href="#bugs" autocapitalize></x-message> <x-icon href="#open"></x-icon></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="questions">
      <x-label><x-message href="#questions" autocapitalize></x-message> <x-icon href="#open"></x-icon></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="changelog">
      <x-label><x-message href="#changelog" autocapitalize></x-message> <x-icon href="#open"></x-icon></x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>
  </x-menu>
</x-menuitem>

<x-menuitem id="ellipsis-menu-item" hidden>
  <x-label>…</x-label>
  <x-menu id="ellipsis-menu"></x-menu>
</x-menuitem>