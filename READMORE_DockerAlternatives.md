# Docker Alternatives Overview

## Abstract

Docker is a widely known and used platform for developing, shipping, and running applications in containers.
However, there could be various reasons from performance to licensing to explore alternatives to Docker.

This document provides an overview of some popular alternatives to Docker, along with their compatibility and purpose.

## Podman
[Podman](https://podman.io) is free & open source container tools from Red Hat available on Linux, Mac, and Windows. Provided under Apache License 2.0.

It provides a Docker-compatible command line interface and can be used as a drop-in replacement for Docker in all scenarios. Podman runs containers in a daemonless mode and supports rootless containers, enhancing security and wide compatibility and support.

Usage example for dark-side projects:
```
podman compose up -d
```

[Podman Desktop](https://podman-desktop.io) is Podman's graphical application that makes it easy to install and work with Podman and other container engines.

Manage containers (not just Podman), build, pull, and push images, podify containers into pods, and deploy to Kubernetes easily.

## Containerd
[Containerd](https://containerd.io) is an industry-standard core container runtime, a Cloud Native Computing Foundation graduated project. It is open-source, provided under Apache License 2.0, available on Linux and Windows and is designed to manage the complete container lifecycle: image transfer and storage, container execution and supervision, and low-level storage and image management.

[Getting started with containerd](https://github.com/containerd/containerd/blob/main/docs/getting-started.md)

Usage example for dark-side projects:
```
nerdctl compose up -d
```

## CRI-O
[CRI-O](https://cri-o.io) is an open-source container runtime for Kubernetes, another Cloud Native Computing Foundation graduated project for Linux, provided under Apache License 2.0. It is a lightweight alternative to using Docker as the runtime for kubernetes. It allows Kubernetes to use any OCI-compliant runtime as the container runtime for running pods.

## gVisor
[gVisor](https://gvisor.dev) is an open-source under Apache 2.0 license Linux-compatible container runtime sandbox developed by Google. It provides an additional layer of security between the host kernel and the container and intercepts system calls made by the container and handles them in user space, which helps to mitigate potential security risks. gVisor is designed to be compatible with existing container orchestration systems like Kubernetes.

## Rancher
[Rancher](https://www.rancher.com) by [SUSE](https://www.suse.com) is a complete software stack for teams adopting containers. It addresses the operational and security challenges of managing multiple Kubernetes clusters, while providing DevOps teams with integrated tools for running containerized workloads.
Rancher is open-source and provided under Apache License 2.0. While Rancher Prime is an enterprise version with additional features and support built on top of the open-source version.

[Rancher Desktop](hhttps://www.rancher.com/products/rancher-desktop) lets developers easily run Kubernetes on their desktop. Select the right Kubernetes version with just a few clicks. Build, push, pull, and run container images using either the Docker CLI (with Moby/dockerd) or nerdctl (with containerd).
Rancher is available for Windows, Mac, and Linux.

Usage example for dark-side projects:
```
nerdctl compose up -d
```

## Conclusion
The choice of containerization tool depends on specific use cases, requirements, and preferences. Consider factors such as ease of use, community support, compatibility with existing workflows, and specific features required for your projects.

Podman is a strong candidate for those looking for a full Docker-compatible experience with enhanced features and convenient GUI available on all platforms without any licensing concerns.

Rancher Desktop is an excellent choice for developers who want enterprise-grade Kubernetes management and containerization tools on their desktops. Under the hood, it uses containerd, which is a robust and widely adopted container runtime. For demonstration purposes, it also provides Docker CLI (with Moby/dockerd), however, be aware of Docker licensing implications in your use case.

Containerd and CRI-O are excellent choices for lightweight and efficient container runtimes, but they are mostly suited for Linux environments and advanced users.

gVisor offers an additional security layer for containerized applications that can help to organize safe sandboxes for untrusted workloads.
