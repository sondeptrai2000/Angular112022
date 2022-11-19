import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { TRISTATECHECKBOX_VALUE_ACCESSOR } from 'primeng/tristatecheckbox';

export class TreeNode {
  data?: any;
  children?: TreeNode[];
  leaf?: boolean;
  expanded?: boolean;
}

export class MenuData {
  id?: any;
  parentid?: any;
  label?: string;
  url?: string;
}

@Component({
  selector: 'app-lay-out',
  templateUrl: './lay-out.component.html',
  styleUrls: ['./lay-out.component.css'],
})
export class LayOutComponent implements OnInit {
  files: MenuData[] = [
    { id: 1, parentid: 0, label: 'User', url: '/data-configure/users' },
    { id: 4, parentid: 2, label: 'label 2' },
    { id: 3, parentid: 1, label: 'Header', url: '/data-configure/header' },
    { id: 5, parentid: 0, label: 'label 4' },
    { id: 6, parentid: 0, label: 'label 5' },
    { id: 2, parentid: 1, label: 'Left', url: '/data-configure/header' },
    { id: 7, parentid: 4, label: 'label 7' },
    { id: 8, parentid: 1, label: 'label 8' },
    { id: 10, parentid: 0, label: 'Home ', url: '/home' },
  ];

  listNode: TreeNode[] = [];

  visibleSidebar: boolean = false;
  items: MenuItem[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.setData();
  }

  setData() {
    //Lấy ra root: parentId = 0
    let root = this.files.filter((x) => x.parentid == 0);
    root.forEach((item) => {
      let newNode = new TreeNode();
      newNode.data = item;
      //Lấy list con
      let node = this.covertArrayToTreeNode(item.id);
      if (node) {
        newNode.expanded = false;
        newNode.children = node;
      }
      this.listNode.push(newNode);
    });
    this.listNode = [...this.listNode];
    console.log(this.listNode);
  }

  covertArrayToTreeNode(item: number) {
    let treeTemp: TreeNode[] = [];
    //Lấy ra list con
    let root = this.files.filter((x) => x.parentid == item);
    root.forEach((item) => {
      let newNode = new TreeNode();
      newNode.data = item;
      //Lấy list con
      let node = this.covertArrayToTreeNode(item.id);
      if (node) {
        newNode.expanded = false;
        newNode.children = node;
      }
      treeTemp.push(newNode);
    });
    return treeTemp;
  }

  expandRecursive(node: TreeNode, isExpand: boolean, isRedirect: boolean) {
    debugger
    //Toggle thẻ
    node.expanded = !isExpand;
    //Nếu có link mở đường dẫn
    if (isRedirect) {
      this.router.navigate([node.data.url]);
    }
  }
}
