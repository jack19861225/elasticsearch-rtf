var nodeTemplate = {};

nodeTemplate.nodeList = [
    '<% _.each(nodes.models, function(node) { %>',
    '<a href="#nodes/<%- node.attributes.id %>" class="btn btn-info" rel="tipRight" data-trigger="hover" data-placement="bottom" data-nodeid="<%- node.id %>"',
    'data-content="<b>IP:</b> <%- node.attributes.transport_address %>.<br/><b>ID:</b> <%- node.id %>" data-html="true" data-title="Click for Node Information.">',
    '<% if (node.attributes.master == true) { %>',
    '<i class="icon-bolt"></i> ',
    '<% } %>',
    '<%= node.attributes.name %></a>',
    '<% }); %>'
].join("\n");

nodeTemplate.nodeShutdown = [
    '<div class="lead text-center" style="padding-top: 20px;">Shutdown Command has been sent to Node.<br/>Click button below to refresh node list.<br/>',
    '<br/><br/><a href="#cluster" class="btn btn-large btn-primary">Click to Continue <i class="icon-chevron-right"></i></a>',
    '</div>'
].join("\n");

nodeTemplate.nodeHotThreads = [
    '<div class="modal hide fade" id="threadModal">',
    '<div class="modal-header">',
    '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>',
    '<h3>Modal header</h3>',
    '</div>',
    '<div class="modal-body">',
    '<p>One fine body…</p>',
    '</div>',
    '<div class="modal-footer">',
    '<a href="#" class="btn">Close</a>',
    '<a href="#" class="btn btn-primary">Save changes</a>',
    '</div>',
    '</div>'
].join("\n");

nodeTemplate.nodeInfoModal = [
    '<div class="modal hide fade" id="nodeInfoModal">',
    '<div class="modal-header">',
    '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>',
    '<h3>Settings Information</h3>',
    '</div>',
    '<div class="modal-body">',
    '<p>',
    '<table class="table table-condensed table-striped table-bordered">',
    '<tr><td>Node Name:</td><td><%- settings.nodeName %></td></tr>',
    '<tr><td>Node Version:</td><td><%- version %></td></tr>',
    '<tr><td>Node is Master?</td><td><%- settings.nodeMaster %></td></tr>',
    '<tr><td>Node Holds Data?</td><td><%- settings.nodeData %></td></tr>',
    '<tr><td>Cluster Name:</td><td><%- settings.clusterName %></td></tr>',
    '<tr><td>Hostname:</td><td><%- host %></td></tr>',
    '<tr><td>HTTP Address:</td><td><%- settings.http_address %></td></tr>',
    '<tr><td>Home Path:</td><td><%- settings.pathHome %></td></tr>',
    '<tr><td>Log Path:</td><td><%- settings.logPath %></td></tr>',
    '<tr><td>Logger Prefix:</td><td><%- settings.logPrefix %></td></tr>',

    '</table>',
    '</p>',
    '</div>',
    '<div class="modal-footer">',
    '<a href="#" data-dismiss="modal"  class="btn">Close</a>',
    '</div>',
    '</div>',
    '</div>'
].join("\n");
nodeTemplate.nodeInfo = [

    '<div class="well">',
    '<div class="pull-left" style="line-height: 13px;font-size: 10px;">Refreshed:<br/><%- lastUpdateTime %></div>',

    '<div id="toolbar" class="pull-right">',
    '<div class="btn-group">',
    '<a href="#nodeInfoModal" role="button" data-toggle="modal" class="btn btn-info" rel="tipRight" data-placement="bottom" data-title="Just the Facts, Ma\'am"',
    '><i class="icon-info-sign"></i></a>',
    '<a href="#shutdownNode/<%- nodeId %>" class="btn btn-info" rel="tipRight" data-placement="bottom" data-title="Shutdown Node"><i',
    'class="icon-off"></i>',
    '</a>',
    '</div> <!-- btn group -->',
    '</div> <!-- toolbar --> ',

    '<div class="text-center">',
    '<span style="font-size: 28px;"><%- nodeName %></span>',
    '</div>',
    '</div><!-- well -->',

    /*JVM*/
    '<div class="lead text-left"><i class="icon-th-large"></i> JVM</div>',
    '<div class="row-fluid">',

    '<div class="span4"> ',
    '<div class="text-center">&nbsp;</strong></div>',
    '<table class="table table-condensed table-striped table-bordered">',
    '<tr><td>Heap Used:</td><td><%- jvmStats.mem.heap_used %></td></tr>',
    '<tr><td>Heap Committed:</td><td><%- jvmStats.mem.heap_committed %></td></tr>',
    '<tr><td>Non Heap Used:</td><td><%- jvmStats.mem.non_heap_used %></td></tr>',
    '<tr><td>Non Heap Committed:</td><td><%- jvmStats.mem.non_heap_committed %></td></tr>',
    '<tr><td>JVM Uptime:</td><td><%- jvmStats.uptime %></td></tr>',
    '<tr><td>Thread Count/Peak:</td><td><%- jvmStats.threads.count %> / <%- jvmStats.threads.peak_count %></td></tr>',
    '<tr><td>GC Count:</td><td><%- jvmStats.gc.collection_count %></td></tr>',
    '<tr><td>GC Time:</td><td><%- jvmStats.gc.collection_time %></td></tr>',
    '<tr><td>Java Version:</td><td><%- jvmStats.version %></td></tr>',
    '<tr><td>JVM Vendor:</td><td><%- jvmStats.vm_vendor %></td></tr>',
    '<tr><td>JVM:</td><td><%- jvmStats.vm_name %></td></tr>',
    '</table>',
    '</div>',

    '<div class="span4">',
    '<div class="text-center"><strong>Heap Memory</strong></div>',
    '<div class="chart-container text-center">',
    '<div id="chart-jvmheap" class="chart-placeholder"></div>',
    '<div id="legend"></div>',
    '</div>',
    '</div>',

    '<div class="span4">',
    '<div class="text-center"><strong>Non Heap Memory</strong></div>',
    '<div class="chart-container text-center">',
    '<div id="chart-jvmnonheap" class="chart-placeholder"></div>',
    '<div id="legend"></div>',
    '</div>',
    '</div>',
    '</div>',

    '</div> <!-- end row -->',

    '<ul class="nav nav-list">',
    '<li class="divider"></li>',
    '</ul>',


    /*INDICES*/
    '<div class="lead text-left"><i class="icon-th-large"></i> Indices</div>',
    '<div class="row-fluid">',

    '<div class="span4"> ',
    '<div class="text-center">&nbsp;</strong></div>',
    '<table class="table table-condensed table-striped table-bordered">',
    '<tr><td>Documents:</td><td><%- indices.docs.count%></td></tr>',
    '<tr><td>Documents Deleted:</td><td><%- indices.docs.deleted%></td></tr>',
    '<tr><td>Store Size:</td><td><%- indices.store.size %></td></tr>',
    '<tr><td>Index Req Total:</td><td><%- indices.indexing.index_total %></td></tr>',
    '<tr><td>Delete Req Total:</td><td><%- indices.indexing.delete_total %></td></tr>',
    '<tr><td>Get Req Total:</td><td><%- indices.get.total %></td></tr>',
    '<tr><td>Get(Exists) Total:</td><td><%- indices.get.exists_total %></td></tr>',
    '<tr><td>Get(Missing) Total:</td><td><%- indices.get.missing_total %></td></tr>',
    '<tr><td>Query Total:</td><td><%- indices.search.query_total %></td></tr>',
    '<tr><td>Fetch Total:</td><td><%- indices.search.fetch_total %></td></tr>',
    '</table>',
    '</div>',

    '<div class="span4">',
    '<div class="text-center"><strong>Index Requests Total</strong></div>',
    '<div class="chart-container text-center">',
    '<div id="chart-index" class="chart-placeholder"></div>',
    '<div id="legend"></div>',
    '</div>',
    '</div>',

    '<div class="span4">',
    '<div class="text-center"><strong>Get Requests Total</strong></div>',
    '<div class="chart-container text-center">',
    '<div id="chart-indexget" class="chart-placeholder"></div>',
    '<div id="legend"></div>',
    '</div>',
    '</div>',
    '</div>',

    '</div> <!-- end row -->',

    '<ul class="nav nav-list">',
    '<li class="divider"></li>',
    '</ul>',

    /*OS*/
    '<div class="lead text-left"><i class="icon-th-large"></i> Operating System</div>',
    '<div class="row-fluid">',

    '<div class="span4"> ',
    '<div class="text-center">&nbsp;</strong></div>',
    '<table class="table table-condensed table-striped table-bordered">',
    '<tr><td>Uptime:</td><td><%- osStats.uptime %></td></tr>',
    '<tr><td>Total Memory:</td><td><%- osStats.mem.total %></td></tr>',
    '<tr><td>Total Swap:</td><td><%- osStats.swap.total %></td></tr>',
    '<tr><td>Memory (Used/Free):</td><td><%- osStats.mem.used %> / <%- osStats.mem.free %></td></tr>',
    '<tr><td>Swap (Used/Free):</td><td><%- osStats.swap.used %> / <%- osStats.swap.free %></td></tr>',
    '<tr><td>CPU User/Sys:</td><td><%- osStats.cpu.user %>% / <%- osStats.cpu.sys %>%</td></tr>',
    '<tr><td>CPU Idle:</td><td><%- osStats.cpu.idle %>%</td></tr>',
    '<tr><td>CPU Vendor:</td><td><%- osStats.cpu.vendor %></td></tr>',
    '<tr><td>CPU Model:</td><td><%- osStats.cpu.model %></td></tr>',
    '<tr><td>Total Cores:</td><td><%- osStats.cpu.total_cores %></td></tr>',
    '</table>',
    '</div>',

    '<div class="span4">',
    '<div class="text-center"><strong>CPU Usage (%)</strong></div>',
    '<div class="chart-container text-center">',
    '<div id="chart-cpu" class="chart-placeholder"></div>',
    '<div id="legend"></div>',
    '</div>',
    '</div>',

    '<div class="span4">',
    '<div class="text-center"><strong>Memory Usage (GB)</strong></div>',
    '<div class="chart-container text-center">',
    '<div id="chart-mem" class="chart-placeholder"></div>',
    '<div id="legend"></div>',
    '</div>',
    '</div>',
    '</div>',

    '</div> <!-- end row -->',

    '<ul class="nav nav-list">',
    '<li class="divider"></li>',
    '</ul>',


    /* PROCESS */
    '<div class="lead text-left"><i class="icon-th-large"></i> Process</div>',
    '<div class="row-fluid">',

    '<div class="span4"> ',
    '<div class="text-center">&nbsp;</strong></div>',
    '<table class="table table-condensed table-striped table-bordered">',
    '<tr><td>Open File Descriptors:</td><td><%- osStats.uptime %></td></tr>',
    '<tr><td>CPU Usage:</td><td><%- processStats.cpu.percent %>% of <%- osStats.max_proc_cpu %>%</td></tr>',
    '<tr><td>CPU System:</td><td><%- processStats.cpu.sys %></td></tr>',
    '<tr><td>CPU User:</td><td><%- processStats.cpu.user %></td></tr>',
    '<tr><td>CPU Total:</td><td><%- processStats.cpu.total %></td></tr>',
    '<tr><td>Resident Memory:</td><td><%- processStats.mem.resident %></td></tr>',
    '<tr><td>Shared Memory:</td><td><%- processStats.mem.share %></td></tr>',
    '<tr><td>Total Virtual Memory:</td><td><%- processStats.mem.total_virtual %></td></tr>',
    '</table>',
    '</div>',

    '<div class="span4">',
    '<div class="text-center"><strong>CPU Usage (%)</strong></div>',
    '<div class="chart-container text-center">',
    '<div id="chart-procpu" class="chart-placeholder"></div>',
    '<div id="legend"></div>',
    '</div>',
    '</div>',

    '<div class="span4">',
    '<div class="text-center"><strong>Memory Usage</strong></div>',
    '<div class="chart-container text-center">',
    '<div id="chart-procmem" class="chart-placeholder"></div>',
    '<div id="legend"></div>',
    '</div>',
    '</div>',
    '</div>',

    '</div> <!-- end row -->',

    '<ul class="nav nav-list">',
    '<li class="divider"></li>',
    '</ul>',


    /* THREADPOOL */
    '<div class="lead text-left"><i class="icon-th-large"></i> Thread Pools</div>',
    '<div class="row-fluid">',

    '<div class="span4"> ',
    '<div class="text-center">&nbsp;</strong></div>',
    '<table class="table table-condensed table-striped table-bordered">',
    '<tr><td>Index (Queue/Peak/Active):</td><td><%- threadPool.index.queue %>/<%- threadPool.index.largest %>/<%- threadPool.index.active%></td></tr>',
    '<tr><td>Get (Queue/Peak/Active):</td><td><%- threadPool.get.queue %>/<%- threadPool.get.largest %>/<%- threadPool.get.active%></td></tr>',
    '<tr><td>Search (Queue/Peak/Active):</td><td><%- threadPool.search.queue %>/<%- threadPool.search.largest %>/<%- threadPool.search.active%></td></tr>',
    '<tr><td>Bulk (Queue/Peak/Active):</td><td><%- threadPool.bulk.queue %>/<%- threadPool.bulk.largest %>/<%- threadPool.bulk.active%></td></tr>',
    '<tr><td>Refresh (Queue/Peak/Active):</td><td><%- threadPool.refresh.queue %>/<%- threadPool.refresh.largest %>/<%- threadPool.refresh.active%></td></tr>',
    '<tr><td>Flush (Queue/Peak/Active):</td><td><%- threadPool.flush.queue %>/<%- threadPool.flush.largest %>/<%- threadPool.flush.active%></td></tr>',
    '<tr><td>Merge (Queue/Peak/Active):</td><td><%- threadPool.merge.queue %>/<%- threadPool.merge.largest %>/<%- threadPool.merge.active%></td></tr>',
    '<tr><td>Management (Queue/Peak/Active):</td><td><%- threadPool.management.queue %>/<%- threadPool.management.largest %>/<%- threadPool.management.active%></td></tr>',
    '</table>',
    '</div>',

    '<div class="span4">',
    '<div class="text-center"><strong>Index Thread Count</strong></div>',
    '<div class="chart-container text-center">',
    '<div id="chart-threadindex" class="chart-placeholder"></div>',
    '<div id="legend"></div>',
    '</div>',
    '</div>',

    '<div class="span4">',
    '<div class="text-center"><strong>Search Thread Count</strong></div>',
    '<div class="chart-container text-center">',
    '<div id="chart-threadsearch" class="chart-placeholder"></div>',
    '<div id="legend"></div>',
    '</div>',
    '</div>',
    '</div>',

    '</div> <!-- end row -->',

    '<ul class="nav nav-list">',
    '<li class="divider"></li>',
    '</ul>',

    /* NETWORK */
    '<div class="lead text-left"><i class="icon-th-large"></i> Network</div>',
    '<div class="row-fluid">',

    '<div class="span4"> ',
    '<div class="text-center">&nbsp;</strong></div>',
    '<table class="table table-condensed table-striped table-bordered">',
    '<tr><td>HTTP Address:</td><td><%- netInfo.http.address %></td></tr>',
    '<tr><td>HTTP Bound Address:</td><td><%- netInfo.http.bound_address %></td></tr>',
    '<tr><td>HTTP Publish Address:</td><td><%- netInfo.http.publish_address %></td></tr>',
    '<tr><td>Transport Address:</td><td><%- netInfo.transport.address %></td></tr>',
    '<tr><td>Transport Bound Address:</td><td><%- netInfo.transport.bound_address %></td></tr>',
    '<tr><td>Transport Publish Address:</td><td><%- netInfo.transport.publish_address %></td></tr>',
    '</table>',
    '</div>',

    '<div class="span4">',
    '<div class="text-center"><strong>Transport TX Count</strong></div>',
    '<div class="chart-container text-center">',
    '<div id="chart-transporttx" class="chart-placeholder"></div>',
    '<div id="legend"></div>',
    '</div>',
    '</div>',

    '<div class="span4">',
    '<div class="text-center"><strong>HTTP Open</strong></div>',
    '<div class="chart-container text-center">',
    '<div id="chart-httpopen" class="chart-placeholder"></div>',
    '<div id="legend"></div>',
    '</div>',
    '</div>',
    '</div>',

    '</div> <!-- end row -->',

    '<ul class="nav nav-list">',
    '<li class="divider"></li>',
    '</ul>',

    /* FS */
    '<div class="lead text-left"><i class="icon-th-large"></i> File System</div>',
    '<div class="row-fluid">',

    '<div class="span4"> ',
    '<div class="text-center">&nbsp;</strong></div>',
    '<table class="table table-condensed table-striped table-bordered">',
    '<tr><td>Path:</td><td><%- fileSystem.path %></td></tr>',
    '<tr><td>Mount:</td><td><%- fileSystem.mount %></td></tr>',
    '<tr><td>Device:</td><td><%- fileSystem.dev %></td></tr>',
    '<tr><td>Total Space:</td><td><%- fileSystem.total %></td></tr>',
    '<tr><td>Free Space:</td><td><%- fileSystem.free %></td></tr>',
    '<tr><td>Disk Reads:</td><td><%- fileSystem.disk_reads %></td></tr>',
    '<tr><td>Disk Writes:</td><td><%- fileSystem.disk_writes %></td></tr>',
    '<tr><td>Read Size:</td><td><%- fileSystem.disk_read_size %></td></tr>',
    '<tr><td>Write Size Size:</td><td><%- fileSystem.disk_write_size %></td></tr>',
    '</table>',
    '</div>',

    '<div class="span4">',
    '<div class="text-center"><strong># Disk Reads</strong></div>',
    '<div class="chart-container text-center">',
    '<div id="chart-fsreads" class="chart-placeholder"></div>',
    '<div id="legend"></div>',
    '</div>',
    '</div>',

    '<div class="span4">',
    '<div class="text-center"><strong># Disk Writes</strong></div>',
    '<div class="chart-container text-center">',
    '<div id="chart-fswrites" class="chart-placeholder"></div>',
    '<div id="legend"></div>',
    '</div>',
    '</div>',
    '</div>',

    '</div> <!-- end row -->',

    '<ul class="nav nav-list">',
    '<li class="divider"></li>',
    '</ul>'


].join("\n");