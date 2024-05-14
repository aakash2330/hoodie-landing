
"use client"
import CardAnimation from "@/components/ui/cardAnimation";
import { useContext, useEffect } from "react";

export default function Page(){
  return <div>
    <CardAnimation></CardAnimation>
  </div>
}
//"use client"
//import React, { useState } from 'react';
//import { useEditor, EditorContent, Extension } from '@tiptap/react';
//import StarterKit from '@tiptap/starter-kit';
//import Draggable from 'react-draggable';
//import { Plugin, PluginKey } from 'prosemirror-state';
//import { Decoration, DecorationSet } from 'prosemirror-view';
//
// const DragHandleExtension = Extension.create({
//  name: 'Hovered',
//
//  addOptions() {
//    return {
//      className: 'hovered',  // The CSS class to apply
//    };
//  },
//
//  addProseMirrorPlugins() {
//    return [
//      new Plugin({
//        key: new PluginKey('Hovered'),
//        state: {
//          init: () => DecorationSet.empty,
//          apply: (tr, oldState) => {
//            const decorations = tr.getMeta('Hovered');
//            if (decorations) {
//              return decorations;
//            }
//            return oldState.map(tr.mapping, tr.doc); // Map old decorations to the new document
//          },
//        },
//        props: {
//          decorations(state) {
//            return this.getState(state);
//          }
//        }
//      })
//    ];
//  },
//
//  addCommands() {
//    return {
//      updateHoverFocusDecorations: (decorations) => ({ tr, dispatch }) => {
//        dispatch(tr.setMeta('Hovered', decorations));
//        return true;
//      },
//    };
//  } 
//});
//
//
//export const DragHandle = ({ editor }) => {
//
//  const moveNode = (editor, fromPos, toPos) => {
//    const { tr } = editor.view.state;
//    const node = editor.view.state.doc.nodeAt(fromPos);
//
//    if (node) {
//      tr.delete(fromPos, fromPos + node.nodeSize); // Delete the node from its current position
//      tr.insert(toPos, node); // Insert the node at the new position
//      editor.view.dispatch(tr); // Dispatch the transaction to update the editor state
//    }
//  };
//
//  const [currentDecoration, setCurrentDecoration] = useState(null);
//
//  const updateDecoration = (pos) => {
//  console.log("Updating decoration at pos:", pos);
//  const { doc } = editor.state;
//  const resolvedPos = doc.resolve(pos);
//  console.log("Resolved position:", resolvedPos);
//
//  const node = resolvedPos.nodeAfter;
//  if (node) {
//    const startPos = resolvedPos.before(); // Get the position before the node starts
//    const endPos = startPos + node.nodeSize;
//    console.log("Node start:", startPos, "Node end:", endPos);
//
//    const decorations = DecorationSet.create(doc, [
//      Decoration.node(startPos, endPos, { class: 'hovered' })
//    ]);
//
//    console.log("Decorations to apply:", decorations);
//    editor.commands.updateHoverFocusDecorations(decorations);
//    setCurrentDecoration(decorations);
//  } else if (currentDecoration) {
//    console.log("Clearing decorations because no node is found at the position");
//    editor.commands.updateHoverFocusDecorations(DecorationSet.empty);
//    setCurrentDecoration(null);
//  }
//};
//
//
//  const handleDragStart = (event, data) => {
//    const pos = editor.view.posAtCoords({ left: data.x, top: data.y });
//    if (pos) {
//      updateDecoration(pos.pos);
//    }
//  };
//
//  const handleDrag = (event, data) => {
//    const pos = editor.view.posAtCoords({ left: data.x, top: data.y });
//    if (pos) {
//      console.log("Drag at position:", pos.pos);
//      updateDecoration(pos.pos);
//    }
//  };
//
//
//  const handleDragStop = () => {
//    if (currentDecoration) {
//      editor.commandons.updateHoverFocusDecorations(DecorationSet.empty);
//      setCurrentDecoration(null);
//    }
//  };
//
//  // const handleDragStop = (event, data) => {
//
//  //   const { clientX, clientY } = event;
//  //   const dropPosition = editor.view.posAtCoords({ left: clientX, top: clientY });
//
//  //   console.log('HJHJ', dropPosition)
//
//  //   if (dropPosition) {
//  //     // moveNode(editor, please, dropPosition.pos) // Please is the position of the node that was dragged start
//  //   }
//
//  //   console.log('Drag stopped at:', data.x, data.y);
//
//  //   if (!editor) return;
//  //   editor.commands.updateHoverFocusDecorations(DecorationSet.empty);
//
//  // };
//
//  return (
//    <Draggable
//      onStart={handleDragStart}
//      onDrag={handleDrag}
//      onStop={handleDragStop}
//    >
//      <div className='blah' style={{ zIndex: 999 }}>
//        <div className='drag-handle' />
//        drag me
//      </div>
//    </Draggable>
//  )
//
//}
//
//export default function  TextEditor() {
//  const editor = useEditor({
//    extensions: [
//      StarterKit,
//      DragHandleExtension,
//    ],
//    content: '<p>Hello World!</p>',
//  });
//
//  if (!editor) {
//    return <p>Loading...</p>;
//  }
//  return (
//    <div>
//      <EditorContent editor={editor} />
//      <DragHandle editor={editor} />
//    </div>
//  );
//}
